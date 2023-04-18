import React from "react";


function AccountSettings({ userID, accountSettings }) {
    // Render user account settings
    return (
        <div>
            <h1>Account settings for {userID}</h1>
            <p>Email: {accountSettings.email}</p>
            <p>Username: {accountSettings.username}</p>

        </div>
    )
}

export default AccountSettings