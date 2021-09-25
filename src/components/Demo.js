import React from 'react'

const Demo = () => {

    let emailInput = React.createRef();
    const onSubmitHandler = (e) => {

        e.preventDefault();
    }
    // if (emailInput.current.value.includes('@')) {
    //     console.log('Error');

    //     emailInput.current.focus();
    // };

    return (
        <div>
            <h1>Demo form</h1>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" defaultValue="18" />
                <input type="submit" value="Send" />
                <button type="submit">Click me!</button>

                <label htmlFor="email">Email</label>
                <input
                    ref={emailInput}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@pesho.com" />

                {/* <div className="input-validation">Invalid Email!</div> */}

                <label htmlFor="bio">Bio</label>
                <textarea name="bio" />

                <label htmlFor="occupation"></label>
                <select name="occupation" id="occupation">
                    <option value="it">IT</option>
                    <option value="engineer">Engineer</option>
                    <option value="mechanic">Mechanic</option>
                    <option value="electrician" placeholder="electrician">Electrician</option>
                    <option value="unemployed">Unemployed</option>

                </select>
            </form>
        </div>
    );
}
export default Demo;
