import { h, Component } from 'preact';

export default class ArrowIcon extends Component {

    render({isOpened},{}) {
        return (
            <div>
                {/* keyboard arrow up */}
                { (isOpened) ?
                    <svg style={{
                        marginTop: 6,
                        marginRight: 15,
                        verticalAlign: 'middle',
                    }}  xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    :
                  <svg style={{
                        marginRight: 15,
                        marginTop: 6,                      
                        verticalAlign: 'middle',
                  }} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <polyline points="6 15 12 9 18 15" />
                    </svg>

                }
            </div>
        );
    }
}
