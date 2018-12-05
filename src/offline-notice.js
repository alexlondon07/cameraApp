import React, { Component } from 'react';
import { 
    NetInfo 
} from 'react-native';
import OfflineNoticeBar from './offline-notice-bar';

export default class OfflineNotice extends Component {

    state = {
        isConnected: true
    }
    componentDidMount () {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivity)
    }

    handleConnectivity = isConnected => {
        this.state({ isConnected: isConnected })
    }

    render() {
        return !this.isConnected ? <OfflineNoticeBar/> : null
    }
}
