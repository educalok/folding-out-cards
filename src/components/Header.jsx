const Header = (
  <div>
    <svg
      id='back'
      xmlns='http://www.w3.org/2000/svg'
      width='512'
      height='512'
      viewBox='0 0 512 512'
    >
      <polyline
        points='244 400 100 256 244 112'
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '48px'
        }}
      />
      <line
        x1='120'
        y1='256'
        x2='412'
        y2='256'
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '48px'
        }}
      />
    </svg>
    <div id='headerText'>Select Flight</div>
    <div className='tripDetail'>
      Your Trip
      <div className='tripDest'>
        LON - CPH<div className='oneWay'>One Way</div>
        <div />
      </div>
      12th June, 2023
    </div>
    <svg
      id='settings'
      xmlns='http://www.w3.org/2000/svg'
      width='512'
      height='512'
      viewBox='0 0 512 512'
    >
      <line
        x1='368'
        y1='128'
        x2='448'
        y2='128'
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px'
        }}
      />
      <line
        x1='64'
        y1='128'
        x2='304'
        y2='128'
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px'
        }}
      />
      <line
        x1='368'
        y1='384'
        x2='448'
        y2='384'
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px'
        }}
      />
      <line
        x1='64'
        y1='384'
        x2='304'
        y2='384'
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px'
        }}
      />
      <line
        x1='208'
        y1='256'
        x2='448'
        y2='256'
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px'
        }}
      />
      <line
        x1='64'
        y1='256'
        x2='144'
        y2='256'
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px'
        }}
      />
      <circle
        cx='336'
        cy='128'
        r='32'
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px'
        }}
      />
      <circle
        cx='176'
        cy='256'
        r='32'
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px'
        }}
      />
      <circle
        cx='336'
        cy='384'
        r='32'
        style={{
          fill: 'none',
          stroke: '#000',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32px'
        }}
      />
    </svg>
  </div>
)

export default Header
