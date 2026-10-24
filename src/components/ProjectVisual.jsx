export default function ProjectVisual({ type, title }) {
  return (
    <div className={`pvis pvis--${type}`} role="img" aria-label={`${title} 预览`}>
      {type === 'robot' && (
        <>
          <div className="pvis__console">
            <div className="pvis__console-head">
              <span>ASR → LLM → TTS</span>
              <em>LIVE</em>
            </div>
            <div className="pvis__pipeline">
              <div className="pvis__pipe">
                <strong>FunASR</strong>
                <small>SenseVoice + VAD</small>
              </div>
              <span className="pvis__arrow" />
              <div className="pvis__pipe">
                <strong>Qwen</strong>
                <small>课堂上下文</small>
              </div>
              <span className="pvis__arrow" />
              <div className="pvis__pipe">
                <strong>Seed-TTS</strong>
                <small>40ms PCM</small>
              </div>
            </div>
            <div className="pvis__wave" aria-hidden="true">
              {Array.from({ length: 24 }).map((_, i) => (
                <i key={i} style={{ '--i': i }} />
              ))}
            </div>
            <div className="pvis__console-foot">
              <span>G1 Classroom</span>
              <span>barge-in ready</span>
            </div>
          </div>
          <div className="pvis__glow" />
        </>
      )}

      {type === 'finance' && (
        <>
          <div className="pvis__panel">
            <div className="pvis__row">
              <span />
              <span />
              <span />
            </div>
            <div className="pvis__chart">
              <i style={{ height: '42%' }} />
              <i style={{ height: '68%' }} />
              <i style={{ height: '55%' }} />
              <i style={{ height: '88%' }} />
              <i style={{ height: '72%' }} />
              <i style={{ height: '94%' }} />
            </div>
            <div className="pvis__metrics">
              <div>
                <em>99.9%</em>
                <small>可用性</small>
              </div>
              <div>
                <em>Realtime</em>
                <small>监控接入</small>
              </div>
            </div>
          </div>
          <div className="pvis__glow" />
        </>
      )}

      {type === 'ai' && (
        <>
          <div className="pvis__window">
            <div className="pvis__traffic">
              <span />
              <span />
              <span />
            </div>
            <div className="pvis__chat">
              <div className="pvis__bubble pvis__bubble--user">
                切换 Claude，用本机 Agent 整理会议纪要
              </div>
              <div className="pvis__bubble pvis__bubble--bot">
                <span className="pvis__cursor" />
                工具循环中 · 文件检索 / 结构化总结就绪
              </div>
            </div>
          </div>
          <div className="pvis__glow" />
        </>
      )}
    </div>
  )
}
