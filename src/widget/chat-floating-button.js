import { h, Component } from 'preact';
import {mobileTitleStyle} from "./style";

export default class ChatFloatingButton extends Component {

    render({color, onClick},{}) {
        return (
            <div
                style={{background: color, ...mobileTitleStyle}}
                onClick={onClick}>

                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z"/>
                    <rect x="4" y="13" rx="2" width="4" height="6" />
                    <rect x="16" y="13" rx="2" width="4" height="6" />
                    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                    <path d="M18 19a6 3 0 0 1 -6 3" />
                </svg>

            </div>
        );
    }
}
