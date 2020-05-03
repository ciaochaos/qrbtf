import React from "react";
import './Qrcode.css'

function calViewBox(props) {
    if (!props.qrcode) return '0 0 0 0';

    const nCount = props.qrcode.getModuleCount();
    return '0 0 ' + String(nCount) + ' ' + String(nCount);
}

function calClassName(props) {
    if (props.selected == true) return 'Qr-item Qr-item-selected';
    return 'Qr-item';
}

class QrItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            value: props.value
        }
    }

    handleClick(e) {
        this.props.onSelected(this.state.value);
    }

    render() {
        return (
            <div className={calClassName(this.props)} onClick={this.handleClick}>
                <div className="Qr-item-image">
                    <div className="Qr-item-image-inner">
                        <svg className="Qr-item-svg" width="100%" height="100%" viewBox={calViewBox(this.props)} fill="white">
                            {this.props.renderer}
                        </svg>
                    </div>
                </div>
                <div className="Qr-item-detail">
                    {this.state.value}
                </div>
            </div>
        );
    }
}

export default QrItem;