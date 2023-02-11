import _ from 'loadsh'

function component() {
  const el = document.createElement( 'div' )
  el.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return el
}

docuemnt.body.appendChild( component() )