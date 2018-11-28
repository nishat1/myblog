import React from 'react';

import { auth } from '../firebase';

const onClickSignOutButton = () => {
    auth.signOut();
}

const SignOutButton = () => {
    return (
        <button
            type="button"
            onClick={onClickSignOutButton}>
            Sign Out
        </button>
    );
};

export default SignOutButton;