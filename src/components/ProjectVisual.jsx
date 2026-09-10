export default function ProjectVisual({ type, title }) {
  return (
    <div className={`pvis pvis--${type}`} role="img" aria-label={`${title} 预览`}>
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
              <div className="pvis__bubble pvis__bubble--user">切换 DeepSeek，继续刚才的任务</div>
              <div className="pvis__bubble pvis__bubble--bot">
                <span className="pvis__cursor" />
                流式回复中 · Markdown / 代码高亮就绪
              </div>
            </div>
          </div>
          <div className="pvis__glow" />
        </>
      )}

      {type === 'vision' && (
        <>
          <div className="pvis__frame">
            <div className="pvis__scan" />
            <div className="pvis__face">
              <span className="pvis__corner tl" />
              <span className="pvis__corner tr" />
              <span className="pvis__corner bl" />
              <span className="pvis__corner br" />
            </div>
            <div className="pvis__status">
              <strong>MATCH 92%+</strong>
              <span>签到耗时 {'< 2s'}</span>
            </div>
          </div>
          <div className="pvis__glow" />
        </>
      )}
    </div>
  )
}
