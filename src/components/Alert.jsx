import React from 'react'

const Alert = (props) => {
    const { alert } = props;
    return (
        <div>
            {alert &&
                <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{alert.msg}!</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
        </div>
    )
}

export default Alert