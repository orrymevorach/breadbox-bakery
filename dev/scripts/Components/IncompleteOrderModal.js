import React from 'react';

class IncompleteOrderModal extends React.Component {
    render() {

        return (
            <div className="incomplete-order-modal modal-container" data-modal="incomplete-order-modal">
                <div className="overlay">
                    <div className="modal">
                        <div className="close-modal" onClick={() => this.props.closeModal('incomplete-order-modal')}>
                            <i className="fas fa-times"></i>
                        </div>
                        <h1>Please Complete the Order</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default IncompleteOrderModal ;