import React from 'react';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            copyright: '© 2020 Amy Evans',
          };
    }

    render() {
        return (
            <>
           <p>{this.state.copyright}</p>
           </>
        )
    }
}
export default Footer;