import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    componentDidCatch(error, errorInfo) {
        console.log('error', error);
        console.log('errorInfo', errorInfo)
    }
    render() {
        if(this.state.hasError) {
            return <h4>Something went wrong</h4>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;