import { ReactNode, useState } from 'react';

type AlertType = 'success' | 'info' | 'alert' | 'warning' | 'error';

import cx from 'classnames';

import { ImCancelCircle } from 'react-icons/im';

const getAlertBgClass = (alertType: AlertType) => {
    switch (alertType) {
        case 'success':
            return 'bg-lime-100';
            break;
        case 'info':
            return 'bg-cyan-100';
            break;
        case 'alert':
            return 'bg-slate-100';
            break;
        case 'warning':
            return 'bg-yellow-100';
            break;
        case 'error':
            return 'bg-red-100';
            break;
    }
};

const getAlertBorderClass = (alertType: AlertType) => {
    switch (alertType) {
        case 'success':
            return 'border-lime-400';
            break;
        case 'info':
            return 'border-cyan-400';
            break;
        case 'alert':
            return 'border-slate-400';
            break;
        case 'warning':
            return 'border-yellow-400';
            break;
        case 'error':
            return 'border-red-400';
            break;
    }
};

const getAlertFontClass = (alertType: AlertType) => {
    switch (alertType) {
        case 'success':
            return 'text-lime-700';
            break;
        case 'info':
            return 'text-cyan-700';
            break;
        case 'alert':
            return 'text-slate-700';
            break;
        case 'warning':
            return 'text-yellow-700';
            break;
        case 'error':
            return 'text-red-700';
            break;
    }
};

export default function Alert({
    alertType,
    content,
    hidden,
}: {
    alertType: AlertType;
    content: string;
    hidden: boolean;
}) {
    const [isRemoved, setRemoved] = useState(false);

    return (
        <div
            className={cx(
                'flex flex-row justify-between border px-4 py-3 rounded relative m-5',
                getAlertBgClass(alertType),
                getAlertBorderClass(alertType),
                getAlertFontClass(alertType),
                { hidden: isRemoved || hidden }
            )}
            role='alert'
        >
            <span>{content}</span>
            <span className='float-right my-auto'>
                <ImCancelCircle
                    role='button'
                    onClick={() => setRemoved(true)}
                />
            </span>
        </div>
    );
}
