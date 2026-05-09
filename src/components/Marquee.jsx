import './Marquee.css'

function Track() {
  return (
    <span>
      <span>SENIOR ENGINEER</span><span className="mq-star">✦</span>
      <span className="mq-it">building software with soul</span><span className="mq-star">✦</span>
      <span>ALASKA AIRLINES</span><span className="mq-star">✧</span>
      <span className="mq-it">forager &amp; gardener</span><span className="mq-star">✦</span>
      <span>OPEN TO REMOTE WORK</span><span className="mq-star">✦</span>
      <span className="mq-it">rooted in Minnesota</span><span className="mq-star">✧</span>
    </span>
  )
}

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <Track />
        <span aria-hidden="true"><Track /></span>
      </div>
    </div>
  )
}
