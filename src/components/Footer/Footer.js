import React from 'react';

function Footer() {

    const footerStyle = {
        width: '100%',
        padding: '20px',
        marginTop: '50px',
        margin: '0 auto',
        backgroundColor: '#555',
        color: '#fff',
        textAlign: 'center',
        // position: 'fixed',
        // bottom: '0',
        // left: '0',
        // right: '0',
    }

    return (
        <div style={footerStyle} className="">
            <h4>Copyright &copy; by Learning | 2021  </h4>
        </div>
    );
}

export default Footer;