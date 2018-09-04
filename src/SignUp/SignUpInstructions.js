import React, {Component} from 'react';

class SignUpInstructions extends Component {

    render() {
        return (
            <div>
                <h2>Congratulations on the decision to start taking better care of your plants!</h2>
                <h3>Here are some instructions to get you started.</h3>
                <ol>
                    <li>Start off by entering your device's serial number. You'll need it in order to identify your plant's sensor data.</li>
                    <li>Enter your beloved plant's name. This is optional though recommended. You can edit your plant's name later on.</li>
                    <li>Enter a valid email address. You'll use the address later on to login to the service.</li>
                    <li>Type a secure password. Remember that a strong password should be lengthy enough. Password may contain numbers, symbols as well as capital and lower-case letters.</li>
                    <li>Finally, press "Sign up". You'll be redirected to your plant's profile. We recommend you to start off by editing your plant's care regimen.</li>
                </ol>
                <p>*Required fields</p>
            </div>
        );
    }
}

export default SignUpInstructions;