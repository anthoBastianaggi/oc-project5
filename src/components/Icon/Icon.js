import React, { createElement } from 'react';
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Icon.module.scss';

const Icon = ({ name, type, className }) => {
    if(type === 'svg') {
        let icon
        switch (name) {
            case 'flag-italy':
                icon = (
                    <svg 
                    className={cx(styles.flagIcon, className)} 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 3 2"
                    width="35px"
                    height="25px"
                    >
                        <rect width="3" height="2" fill="#009246"/>
                        <rect width="2" height="2" x="1" fill="#fff"/>
                        <rect width="1" height="2" x="2" fill="#ce2b37"/>
                    </svg>
                )
                break;
            case 'flag-england':
                icon = (
                    <svg 
                    className={cx(styles.flagIcon, className)} 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 35.03 25.03"
                    width="35px"
                    height="25px"
                    >
                        <rect style={{ fill: "#fff", strokeWidth: "0.03px" }} x="0.02" y="0.02" width="35" height="25"/>
                        <rect style={{ fill: "#e30613" }} x="0.03" y="9.12" width="34.98" height="6.79"/>
                        <rect style={{ fill: "#e30613", strokeWidth: "0.03px" }} x="14.58" y="0.02" width="5.86" height="25"/>
                        <rect style={{ fill: "none", strokeWidth: "0.03px" }} x="0.02" y="0.02" width="35" height="25"/>
                    </svg>
                )
                break;
            case 'flag-france':
                icon = (
                    <svg 
                    className={cx(styles.flagIcon, className)} 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 3 2"
                    width="35px"
                    height="25px"
                    >
                        <rect width="1" height="2" fill="#002395"/>
                        <rect width="2" height="2" x="1" fill="#fff"/>
                        <rect width="3" height="2" x="2" fill="#ED2939"/>
                    </svg>
                )
                break;
            case 'flag-corsica':
                icon = (
                    <svg
                    className={cx(styles.flagIcon, className)} 
                    xmlns="http://www.w3.org/2000/svg" 
                    version="1.0"
                    viewBox="0 0 35 24"
                    width="35px"
                    height="25px"
                    >
                        <path style={{ fill: "#fff" }} d="M0,24V0H35V24ZM23.22,9.18l.71-.26-.33-.56.24-.1c.23-.11.26-.26.09-.46a1.09,1.09,0,0,1-.19-1.15.38.38,0,0,0-.07-.27c-.15-.19-.32-.35-.49-.53l.32-.49a1.45,1.45,0,0,1-1-.83,9,9,0,0,0-.5-.77l.07-.23-.24-.11c-.47-.19-.95-.36-1.41-.56A2,2,0,0,1,20,2.5a2.89,2.89,0,0,1-.84-.18A2.47,2.47,0,0,0,18.32,2,3.22,3.22,0,0,0,16.69,2l-.1-.48a1.86,1.86,0,0,1-1.86.69l-1,.69c-.15.1-.31.16-.46.25s-.39.28-.56.4-.21.47-.3.7-.15.45-.24.66a1.07,1.07,0,0,1-.26.41.81.81,0,0,0-.31.81.49.49,0,0,1-.06.34,1.73,1.73,0,0,0-.2,1.25,2.91,2.91,0,0,1,0,.84c0,.35,0,.69,0,1a1.62,1.62,0,0,1,0,.55c-.31.72-.66,1.42-1,2.13a2.74,2.74,0,0,0-.18.62c-.07.39.08.59.43.63l.48,0a.57.57,0,0,1-.22.61.51.51,0,0,0,0,.81c.16.14.15.26.11.45-.11.54,0,.67.46.65.25,0,.33.14.34.37a4.34,4.34,0,0,1-.06.71c-.09.71.09,1.08.69,1.31a1.46,1.46,0,0,0,.5.12l1.78,0a2.51,2.51,0,0,0,1,1.37,2.44,2.44,0,0,1,.65.74,9.4,9.4,0,0,1,.5,1.44c.05.17.1.27.27.31a2.51,2.51,0,0,0,2.61-1c.55-.66,1.06-1.37,1.56-2.08A5.53,5.53,0,0,1,23,17.52a.76.76,0,0,0,.18-.13c-.32-.54-.66-1-.93-1.57A5.7,5.7,0,0,1,21.77,14l.54-.14-.52-.76.7-.06a2.65,2.65,0,0,1-.21-.59,2.92,2.92,0,0,1,0-.66s.06-.07.09-.08.07.05.08.08c.17.52.34,1.05.49,1.58a1.63,1.63,0,0,0,1.11,1.29,1.3,1.3,0,0,1,1,1.26,2.51,2.51,0,0,1,0,.27,1,1,0,0,1-.09.39,3.22,3.22,0,0,1-1.21,1l-.5.26.4,1.29a.37.37,0,0,1-.11.43c-.33.31-.65.64-.95,1a.57.57,0,0,0-.1.37,1.43,1.43,0,0,0,.15.44c.15.3.36.53.69.51a.77.77,0,0,0,.7-.6,3.45,3.45,0,0,1,1.26-1.75.54.54,0,0,0,.22-.46,4.54,4.54,0,0,1,.49-2,1.93,1.93,0,0,0,.23-1.52,3.61,3.61,0,0,1-.16-1.38,1.13,1.13,0,0,0-.69-1.18l-.9-.43a1.49,1.49,0,0,1-.69-.78,14.36,14.36,0,0,0,1.32-.6,1.58,1.58,0,0,0,.57-.63c.2-.45.3-.95.46-1.42.47-1.39,1-2.77,1.43-4.15.21-.58.16-.79-.31-1.09a.86.86,0,0,0-.27-.09,1.1,1.1,0,0,0,0,.31c0,.44-.1.61-.48.64l-.46,0c.24-.39.21-.73-.1-.8s-.35-.29-.33-.57,0-.27,0-.41c0-.3-.11-.51-.38-.54a4.7,4.7,0,0,0-.65,0,1.34,1.34,0,0,0-.05.14c0,.27,0,.55,0,.82a.33.33,0,0,1-.15.25c-.2.08-.41.11-.61.18-.41.13-.51.45-.28.85a.81.81,0,0,1,.13.3c.23.9.47,1.8.68,2.7a3,3,0,0,1-.13,2,.91.91,0,0,1-1,.63c-.1,0-.19-.12-.29-.18l0-.05.54,0Z"/>
                        <path d="M23.22,9.18l.3.9-.54,0,0,.05c.1.06.19.16.29.18a.91.91,0,0,0,1-.63,3,3,0,0,0,.13-2c-.21-.9-.45-1.8-.68-2.7a.81.81,0,0,0-.13-.3c-.23-.4-.13-.72.28-.85.2-.07.41-.1.61-.18a.33.33,0,0,0,.15-.25c0-.27,0-.55,0-.82a1.34,1.34,0,0,1,.05-.14,4.7,4.7,0,0,1,.65,0c.27,0,.39.24.38.54,0,.14,0,.27,0,.41s0,.49.33.57.34.41.1.8l.46,0c.38,0,.5-.2.48-.64a1.1,1.1,0,0,1,0-.31.86.86,0,0,1,.27.09c.47.3.52.51.31,1.09-.48,1.38-1,2.76-1.43,4.15-.16.47-.26,1-.46,1.42a1.58,1.58,0,0,1-.57.63,14.36,14.36,0,0,1-1.32.6,1.49,1.49,0,0,0,.69.78l.9.43a1.13,1.13,0,0,1,.69,1.18,3.61,3.61,0,0,0,.16,1.38,1.93,1.93,0,0,1-.23,1.52,4.54,4.54,0,0,0-.49,2,.54.54,0,0,1-.22.46,3.45,3.45,0,0,0-1.26,1.75.77.77,0,0,1-.7.6c-.33,0-.54-.21-.69-.51a1.43,1.43,0,0,1-.15-.44.57.57,0,0,1,.1-.37c.3-.34.62-.67.95-1a.37.37,0,0,0,.11-.43l-.4-1.29.5-.26a3.22,3.22,0,0,0,1.21-1,1,1,0,0,0,.09-.39,2.51,2.51,0,0,0,0-.27,1.3,1.3,0,0,0-1-1.26A1.63,1.63,0,0,1,23,13.41c-.15-.53-.32-1.06-.49-1.58,0,0-.05-.08-.08-.08s-.09.05-.09.08a2.92,2.92,0,0,0,0,.66,2.65,2.65,0,0,0,.21.59l-.7.06.52.76-.54.14a5.7,5.7,0,0,0,.51,1.78c.27.54.61,1,.93,1.57a.76.76,0,0,1-.18.13,5.53,5.53,0,0,0-1.89,1.81c-.5.71-1,1.42-1.56,2.08a2.51,2.51,0,0,1-2.61,1c-.17,0-.22-.14-.27-.31a9.4,9.4,0,0,0-.5-1.44,2.44,2.44,0,0,0-.65-.74,2.51,2.51,0,0,1-1-1.37l-1.78,0a1.46,1.46,0,0,1-.5-.12c-.6-.23-.78-.6-.69-1.31a4.34,4.34,0,0,0,.06-.71c0-.23-.09-.37-.34-.37-.49,0-.57-.11-.46-.65,0-.19.05-.31-.11-.45a.51.51,0,0,1,0-.81.57.57,0,0,0,.22-.61l-.48,0c-.35,0-.5-.24-.43-.63a2.74,2.74,0,0,1,.18-.62c.32-.71.67-1.41,1-2.13a1.62,1.62,0,0,0,0-.55c0-.35,0-.69,0-1a2.91,2.91,0,0,0,0-.84,1.73,1.73,0,0,1,.2-1.25.49.49,0,0,0,.06-.34.81.81,0,0,1,.31-.81,1.07,1.07,0,0,0,.26-.41c.09-.21.15-.44.24-.66s.2-.46.3-.7.36-.27.56-.4.31-.15.46-.25l1-.69a1.86,1.86,0,0,0,1.86-.69l.1.48A3.22,3.22,0,0,1,18.32,2a2.47,2.47,0,0,1,.83.28A2.89,2.89,0,0,0,20,2.5a2,2,0,0,0,.44.36c.46.2.94.37,1.41.56l.24.11L22,3.76a9,9,0,0,1,.5.77,1.45,1.45,0,0,0,1,.83l-.32.49c.17.18.34.34.49.53a.38.38,0,0,1,.07.27,1.09,1.09,0,0,0,.19,1.15c.17.2.14.35-.09.46l-.24.1.33.56Zm-3,1.54v-.09a.76.76,0,0,1,.25-.06q.55.07,1.11.18a.42.42,0,0,1,.25.16c.12.22.31.17.48.19s.26-.1.18-.25a2,2,0,0,0-.41-.6c-.32-.28-.71-.47-1-.77A4.58,4.58,0,0,0,19,8.3a3.43,3.43,0,0,1-.52-.2L18.67,8c-.32-.12-.61-.25-.9-.35a4,4,0,0,0-.88-.24,10.33,10.33,0,0,1-3.29-.94.16.16,0,0,1,0-.06A11.76,11.76,0,0,0,16.11,7,.3.3,0,0,0,16,6.82a16.19,16.19,0,0,0-3.38-1.75.19.19,0,0,0-.19,0,4.49,4.49,0,0,0-.41.46c-.21.26-.2.41,0,.64a.76.76,0,0,0,.16.11c-.2.12-.4.17-.47.3-.27.48.25.48.4.74l-.22,0c-.22-.07-.29,0-.3.28a.56.56,0,0,0,.37.61A15.83,15.83,0,0,1,13.68,9a4.43,4.43,0,0,0,2.18.49h.43v.08l-.43.15v.08c.42.14.84.28,1.26.39.07,0,.17-.06.24-.11a6.74,6.74,0,0,1,.91-.66c.54-.24,1.09.13,1.34.79a1.31,1.31,0,0,1-.56,1.36,1.82,1.82,0,0,0-.43.57c-.15.26-.26.54-.42.79a.28.28,0,0,1-.46.08,1.26,1.26,0,0,0-.33-.15.53.53,0,0,0,.95.25,4,4,0,0,0,.32-.54,2,2,0,0,1,.71-.95.83.83,0,0,0,.26-.32c.24-.39.41-.43.76-.18a1.32,1.32,0,0,0,1.29,0C21.24,10.77,20.69,10.86,20.19,10.72Zm3.08.25a.77.77,0,0,0,.8.54,2.13,2.13,0,0,0,1.82-1.75,31.53,31.53,0,0,1,1.47-4.53c0-.08.05-.16.09-.27-.43,0-.83.06-1.22.11a.44.44,0,0,0-.27.18c-.23.29-.47.54-.86.47A7.41,7.41,0,0,1,25,8.21c0-.55,0-1.1,0-1.64a3.89,3.89,0,0,0-.16-1c-.12-.4,0-.71.35-.79.18,0,.37,0,.54-.08a1.32,1.32,0,0,0,.3-.24c-.11-.08-.2-.21-.32-.23a.87.87,0,0,0-.83.29,1.42,1.42,0,0,1-1,.58c.21.84.43,1.64.61,2.46a5.75,5.75,0,0,1,.13,1.17A2.31,2.31,0,0,1,24.28,10a1.15,1.15,0,0,1-1,.6,1.75,1.75,0,0,0,1.52-.4.5.5,0,0,1-.24.27c-.4.14-.81.26-1.16.37a1.76,1.76,0,0,0,1.45-.18A1.59,1.59,0,0,1,23.27,11Zm-.24.58-.13,0a2.29,2.29,0,0,0,.26,1c.13.31.32.6.48.9l-.06.05-.61-1c.07.29.13.59.2.89a1.39,1.39,0,0,0,1,1.12,1.45,1.45,0,0,1,1.13,1.17l0-.53h.09l.1.8h0V15h.07a2.87,2.87,0,0,1,.05.31c0,.11,0,.22,0,.33h0l.06-.52h.05l.11.33A1.71,1.71,0,0,0,26,15c0-.31,0-.62,0-.93a.82.82,0,0,0-.45-.76l-.86-.4a1.67,1.67,0,0,1-.85-.79,3.32,3.32,0,0,0-.32-.48l.06.51c-.17-.23-.13-.59-.43-.73l.36.92-.07,0Zm3,3.84A4.94,4.94,0,0,1,23.61,18l.55,2.26h0V19.5h.1l0,.8h.07v-1h.08l.08.66h.07l.05-.75h.06l.08.45,0,0v-.59l.08,0,.08.46h.06l.08-.63.08,0,0,.4c.07,0,.11-.09.11-.14A5.79,5.79,0,0,1,26,16.8,1.67,1.67,0,0,0,26.05,15.39Zm-2.14,5.75.1-.06-.2-1.38-1,1a.37.37,0,0,0-.05.11c-.06.39.41.89.76.8L23,21.13l.07-.08c.1.09.2.2.3.28l.33.22,0-.05-.59-.6.05-.07.63.54.05-.07-.58-.57.06-.08ZM12.45,10.2c-.13.42-.09.78.12.82s.27-.26.34-.46l.44.21-.67.41,0,.11c.33.07.58-.27.89-.31.1,0,.18-.16.32-.29a2.6,2.6,0,0,1-1.53-.92s-.14,0-.28,0Zm13-6.58-1.56.5c-.16,0-.34.11-.27.4L24,4.29l0,0-.27.34.05.06.37-.31.07.1-.31.22.06.07c.62,0,.87-.88,1.5-.85Zm-8,6.89.08.08c.07-.05.13-.12.2-.16a4.45,4.45,0,0,1,.79-.45c.34-.11.51.08.49.5,0,.1,0,.2,0,.3s.05.19.07.29c.05-.08.14-.15.16-.24a1.67,1.67,0,0,0,0-.5c0-.42-.28-.7-.64-.61a3.62,3.62,0,0,0-.93.45C17.57,10.22,17.53,10.39,17.47,10.51ZM18,12l-.31-.13c0,.09-.07.22,0,.25s.21.18.31.17a.37.37,0,0,0,.26-.24.93.93,0,0,1,.34-.6.47.47,0,0,0,0-.69c0-.05-.15,0-.24-.05s0,.18.05.23.1.24,0,.32A.83.83,0,0,0,18,12Zm6.8-9.24v.91a4.15,4.15,0,0,0,.62-.43.27.27,0,0,0-.17-.47A3.26,3.26,0,0,0,24.79,2.74ZM26,5l-.06-.08a2,2,0,0,0-.61.09.49.49,0,0,0-.27.34c0,.15.26.27.42.15A4.89,4.89,0,0,0,26,5Zm-3.61,6.62a.64.64,0,0,0,.72-.59c0-.27-.1-.4-.41-.43A.67.67,0,0,1,22.34,11.58Zm4.93-7.5-.12.7.54-.22Z"/>
                        <path style={{ fill: "#fff" }} d="M20.19,10.72c.5.14,1,0,1.51.38a1.32,1.32,0,0,1-1.29,0c-.35-.25-.52-.21-.76.18a.83.83,0,0,1-.26.32,2,2,0,0,0-.71.95,4,4,0,0,1-.32.54.53.53,0,0,1-.95-.25,1.26,1.26,0,0,1,.33.15.28.28,0,0,0,.46-.08c.16-.25.27-.53.42-.79a1.82,1.82,0,0,1,.43-.57,1.31,1.31,0,0,0,.56-1.36c-.25-.66-.8-1-1.34-.79a6.74,6.74,0,0,0-.91.66c-.07.05-.17.13-.24.11-.42-.11-.84-.25-1.26-.39V9.67l.43-.15V9.44h-.43A4.43,4.43,0,0,1,13.68,9,15.83,15.83,0,0,0,12,8.21a.56.56,0,0,1-.37-.61c0-.24.08-.35.3-.28l.22,0c-.15-.26-.67-.26-.4-.74.07-.13.27-.18.47-.3a.76.76,0,0,1-.16-.11c-.24-.23-.25-.38,0-.64a4.49,4.49,0,0,1,.41-.46.19.19,0,0,1,.19,0A16.19,16.19,0,0,1,16,6.82a.3.3,0,0,1,.11.16,11.76,11.76,0,0,1-2.54-.61.16.16,0,0,0,0,.06,10.33,10.33,0,0,0,3.29.94,4,4,0,0,1,.88.24c.29.1.58.23.9.35l-.17.14a3.43,3.43,0,0,0,.52.2,4.58,4.58,0,0,1,2,1.18c.32.3.71.49,1,.77a2,2,0,0,1,.41.6c.08.15,0,.28-.18.25s-.36,0-.48-.19a.42.42,0,0,0-.25-.16q-.55-.11-1.11-.18a.76.76,0,0,0-.25.06Zm.73-.89,0,.06a4.86,4.86,0,0,0-.54,0,.49.49,0,0,1-.5-.22,4.52,4.52,0,0,0-2.14-1.36s-.1,0-.15,0,0,.11.08.13a1.34,1.34,0,0,0,.27.13,4.17,4.17,0,0,1,1.92,1.31.63.63,0,0,0,.5.18,1.85,1.85,0,0,1,1.05.24c.2.1.39.23.59.33,0,0,.11,0,.16,0a.47.47,0,0,0,0-.16.67.67,0,0,0-.14-.15,12.44,12.44,0,0,0-2.6-1.63c-.05,0-.13,0-.25.06ZM16,8.61V8.5c-.15,0-.3,0-.46,0a2.58,2.58,0,0,1-1.58-.33,2.67,2.67,0,0,0-1.69-.48c-.09,0-.17.07-.26.11a1.06,1.06,0,0,0,.25.11,2.35,2.35,0,0,1,1.47.37,3.29,3.29,0,0,0,2.18.44S15.92,8.64,16,8.61Z"/>
                        <path style={{ fill: "#fff" }} d="M23.27,11a1.59,1.59,0,0,0,1.54-.29,1.76,1.76,0,0,1-1.45.18c.35-.11.76-.23,1.16-.37a.5.5,0,0,0,.24-.27,1.75,1.75,0,0,1-1.52.4,1.15,1.15,0,0,0,1-.6,2.31,2.31,0,0,0,.34-1.32,5.75,5.75,0,0,0-.13-1.17c-.18-.82-.4-1.62-.61-2.46a1.42,1.42,0,0,0,1-.58.87.87,0,0,1,.83-.29c.12,0,.21.15.32.23a1.32,1.32,0,0,1-.3.24c-.17,0-.36,0-.54.08-.37.08-.47.39-.35.79a3.89,3.89,0,0,1,.16,1c0,.54,0,1.09,0,1.64a7.41,7.41,0,0,0,.07-2.49c.39.07.63-.18.86-.47a.44.44,0,0,1,.27-.18C26.62,5,27,5,27.45,5c0,.11-.06.19-.09.27a31.53,31.53,0,0,0-1.47,4.53,2.13,2.13,0,0,1-1.82,1.75A.77.77,0,0,1,23.27,11Zm2.67-3.92L26,7l-.1-1.09-.09,0Z"/>
                        <path style={{ fill: "#fff" }} d="M23,11.55l.36.83.07,0-.36-.92c.3.14.26.5.43.73l-.06-.51a3.32,3.32,0,0,1,.32.48,1.67,1.67,0,0,0,.85.79l.86.4a.82.82,0,0,1,.45.76c0,.31,0,.62,0,.93a1.71,1.71,0,0,1-.1.39l-.11-.33H25.7l-.06.52h0c0-.11,0-.22,0-.33a2.87,2.87,0,0,0-.05-.31h-.07v1h0l-.1-.8h-.09l0,.53a1.45,1.45,0,0,0-1.13-1.17,1.39,1.39,0,0,1-1-1.12c-.07-.3-.13-.6-.2-.89l.61,1,.06-.05c-.16-.3-.35-.59-.48-.9a2.29,2.29,0,0,1-.26-1Z"/>
                        <path style={{ fill: "#fff" }} d="M26.05,15.39a1.67,1.67,0,0,1,0,1.41,5.79,5.79,0,0,0-.63,2.36c0,.05,0,.1-.11.14l0-.4-.08,0-.08.63H25L25,19.05l-.08,0v.59l0,0-.08-.45h-.06l-.05.75h-.07l-.08-.66h-.08v1h-.07l0-.8h-.1v.73h0L23.61,18A4.94,4.94,0,0,0,26.05,15.39Z"/>
                        <path style={{ fill: "#fff" }} d="M23.91,21.14l-.54-.49-.06.08.58.57-.05.07-.63-.54-.05.07.59.6,0,.05-.33-.22c-.1-.08-.2-.19-.3-.28l-.07.08.49.51c-.35.09-.82-.41-.76-.8a.37.37,0,0,1,.05-.11l1-1,.2,1.38Z"/>
                        <path style={{ fill: "#fff" }} d="M12.45,10.2l-.33-.43c.14,0,.25,0,.28,0a2.6,2.6,0,0,0,1.53.92c-.14.13-.22.28-.32.29-.31,0-.56.38-.89.31l0-.11.67-.41-.44-.21c-.07.2-.05.52-.34.46S12.32,10.62,12.45,10.2Z"/>
                        <path style={{ fill: "#fff" }} d="M25.47,3.62V4c-.63,0-.88.83-1.5.85l-.06-.07.31-.22-.07-.1-.37.31-.05-.06L24,4.33l0,0-.34.23c-.07-.29.11-.35.27-.4Z"/>
                        <path style={{ fill: "#fff" }} d="M17.47,10.51c.06-.12.1-.29.2-.34a3.62,3.62,0,0,1,.93-.45c.36-.09.62.19.64.61a1.67,1.67,0,0,1,0,.5c0,.09-.11.16-.16.24,0-.1-.06-.19-.07-.29s0-.2,0-.3c0-.42-.15-.61-.49-.5a4.45,4.45,0,0,0-.79.45c-.07,0-.13.11-.2.16Z"/>
                        <path style={{ fill: "#fff" }} d="M18,12a.83.83,0,0,1,.37-.74c.13-.08.14-.19,0-.32s0-.16-.05-.23.19,0,.24.05a.47.47,0,0,1,0,.69.93.93,0,0,0-.34.6.37.37,0,0,1-.26.24c-.1,0-.22-.09-.31-.17s0-.16,0-.25Z"/>
                        <path style={{ fill: "#fff" }} d="M24.79,2.74a3.26,3.26,0,0,1,.45,0,.27.27,0,0,1,.17.47,4.15,4.15,0,0,1-.62.43Z"/>
                        <path style={{ fill: "#fff" }} d="M26,5a4.89,4.89,0,0,1-.52.5c-.16.12-.44,0-.42-.15A.49.49,0,0,1,25.28,5a2,2,0,0,1,.61-.09Z"/>
                        <path style={{ fill: "#fff" }} d="M22.34,11.58a.67.67,0,0,0,.31-1c.31,0,.43.16.41.43A.64.64,0,0,1,22.34,11.58Z"/>
                        <path style={{ fill: "#fff" }} d="M27.27,4.08l.42.48-.54.22Z"/>
                        <path d="M20.92,9.83,19.1,8.78c.12,0,.2-.08.25-.06A12.44,12.44,0,0,1,22,10.35a.67.67,0,0,1,.14.15.47.47,0,0,1,0,.16c-.05,0-.12,0-.16,0-.2-.1-.39-.23-.59-.33a1.85,1.85,0,0,0-1.05-.24.63.63,0,0,1-.5-.18,4.17,4.17,0,0,0-1.92-1.31,1.34,1.34,0,0,1-.27-.13s-.06-.08-.08-.13.11-.07.15,0a4.52,4.52,0,0,1,2.14,1.36.49.49,0,0,0,.5.22,4.86,4.86,0,0,1,.54,0Z"/>
                        <path d="M16,8.61s-.06.07-.09.07a3.29,3.29,0,0,1-2.18-.44,2.35,2.35,0,0,0-1.47-.37A1.06,1.06,0,0,1,12,7.76c.09,0,.17-.11.26-.11a2.67,2.67,0,0,1,1.69.48,2.58,2.58,0,0,0,1.58.33c.16,0,.31,0,.46,0Z"/>
                        <path d="M25.94,7.05,25.85,6l.09,0L26,7Z"/>
                    </svg>            
                 )
                break;
            default:
                break;
        }
        return icon;
    }

    return createElement(FeatherIcon, {
        className: cx({ [className]: Boolean(className) }),
        icon: name
    })
}

Icon.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
}

Icon.defaultProps = {
    name: '',
    type: 'svg'
}

export default Icon;