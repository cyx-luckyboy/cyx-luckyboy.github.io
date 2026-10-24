import { spawnSync } from 'node:child_process'
import { cpSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

const root = process.cwd()
const dist = join(root, 'dist')
const work = join(tmpdir(), `portfolio-pages-${Date.now()}`)

function run(command, cwd = root) {
  const result = spawnSync(command, { cwd, stdio: 'inherit', shell: true })
  if (result.status !== 0) process.exit(result.status ?? 1)
}

run('npm run build')
writeFileSync(join(dist, '.nojekyll'), '')

run(
  `git clone --branch main --single-branch https://github.com/cyx-luckyboy/cyx-luckyboy.github.io.git "${work}"`,
)
run('git rm -rf .', work)
cpSync(dist, work, { recursive: true })
run('git add -A', work)
run('git commit -m "Deploy built portfolio site to GitHub Pages."', work)
run('git push origin main', work)
rmSync(work, { recursive: true, force: true })

console.log('Deployed: https://cyx-luckyboy.github.io/')
