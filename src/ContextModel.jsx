import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

export default function ContextModel(props) {
    const { show, onClose } = { ...props };

    return !show ? null : (
        <>
            <Modal show={show} onHide={onClose}>
                <Modal.Header>
                    <Modal.Title>Node Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>Demo context form placeholder</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={onClose}>
                        Submit
                    </Button>
                    <Button variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

ContextModel.propTypes = {
    // eslint-disable-next-line react/no-unused-prop-types
    show: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types
    onClose: PropTypes.func,
};

ContextModel.defaultProps = {
    show: false,
    onClose: () => {
    },
};
