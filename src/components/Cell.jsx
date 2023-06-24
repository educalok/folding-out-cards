import { useState } from 'react'
import barCode from '/assets/barcode.png'
import airPlane from '/assets/airplane2.png'

const Cell = props => {
  const [active, handleActive] = useState(false)

  return (
    <div
      className='cardContainer'
      style={{
        height: active ? `300px` : `100px`,
        transition: '0.9s'
      }}
      onClick={() => {
        handleActive(!active)
      }}
    >
      <div className='firstDisplay'>
        <div className='flightDetail'>
          <div
            className='detailLabel'
            style={{ fontWeight: 'bold', color: props.label }}
          >
            From
          </div>
          LON
          <div className='detailLabel'>Heathrow Airport</div>
        </div>
        <div
          className='flightDetail'
          style={{
            marginTop: '15px'
          }}
        >
          <div className='animContainer'>
            <div className='anim'>
              <div className='circle' />
              <div className='circle' />
              <div className='circle' />
            </div>
          </div>
          <div className='animContainer' style={{ left: '62px' }}>
            <div className='anim'>
              <div className='circle' />
              <div className='circle' />
              <div className='circle' />
            </div>
          </div>
          <img style={{ width: '30px' }} src={airPlane} />
        </div>
        <div className='flightDetail'>
          <div
            className='detailLabel'
            style={{ fontWeight: 'bold', color: props.label }}
          >
            To
          </div>
          CPH
          <div className='detailLabel'>Copenhagen International Airport</div>
        </div>
      </div>
      <div
        className='first'
        style={{
          transform: active
            ? `rotate3d(1, 0, 0, -180deg)`
            : `rotate3d(1, 0, 0, 0deg)`,
          transitionDelay: active ? '0s' : '0.3s'
        }}
      >
        <div className='firstTop'>
          <img style={props.style} src={props.logo} />
          <div className='timecontainer'>
            <div className='detailDate'>
              London
              <div className='detailTime'>6:20</div>
              June 12
            </div>
            <img
              style={{
                width: '30px',
                height: '26px',
                marginTop: '22px',
                marginLeft: '16px',
                marginRight: '16px'
              }}
              src={airPlane}
            />
            <div className='detailDate'>
              Copenhagen
              <div className='detailTime'>8:45</div>
              June 12
            </div>
          </div>
        </div>
        <div className='firstBehind'>
          <div className='firstBehindDisplay'>
            <div className='firstBehindRow'>
              <div className='detail'>
                6:20 - 8:45
                <div className='detailLabel'>Flight Time</div>
              </div>
              <div className='detail'>
                No
                <div className='detailLabel'>Transfer</div>
              </div>
            </div>
            <div className='firstBehindRow'>
              <div className='detail'>
                2h 25 min
                <div className='detailLabel'>Duration</div>
              </div>
              <div className='detail'>
                8<div className='detailLabel'>Gate</div>
              </div>
            </div>
            <div className='firstBehindRow'>
              <div className='detail'>
                5:35
                <div className='detailLabel'>Boarding</div>
              </div>
              <div className='detail'>
                20A
                <div className='detailLabel'>Seat</div>
              </div>
            </div>
          </div>
          <div
            className='second'
            style={{
              transform: active
                ? `rotate3d(1, 0, 0, -180deg)`
                : `rotate3d(1, 0, 0, 0deg)`,
              transitionDelay: active ? '0.2s' : '0.2s'
            }}
          >
            <div className='secondTop' />
            <div className='secondBehind'>
              <div className='secondBehindDisplay'>
                <div className='price'>
                  $100
                  <div className='priceLabel'>Price</div>
                </div>
                <div className='price'>
                  Economy
                  <div className='priceLabel'>Class</div>
                </div>
                <img className='barCode' src={barCode} />
              </div>
              <div
                className='third'
                style={{
                  transform: active
                    ? `rotate3d(1, 0, 0, -180deg)`
                    : `rotate3d(1, 0, 0, 0deg)`,
                  transitionDelay: active ? '0.4s' : '0s'
                }}
              >
                <div className='thirdTop' />
                <div className='secondBehindBottom'>
                  <button
                    className='button'
                    style={{
                      color: props.label,
                      border: `1px solid ${props.label}`
                    }}
                  >
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cell
