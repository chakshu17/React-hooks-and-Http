import React, { useState } from "react";
import UseInput from "./UseInput";

function UserFrom() {
	// const [firstName, setFirstName] = useState("");
	// const [lastName, setLastName] = useState("");

  const[firstName,bindFirstName , resetFirstName]  = UseInput('')
  const[lastName,bindLastName , resetLastName]  = UseInput('')

	const submitHandler = e => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  };
	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label>First name : </label>
					<input
					{...bindFirstName}
						type="text"
					/>
				</div>
				<div>
					<label>Last name : </label>
					<input
						{...bindLastName}
						type="text"
					/>
				</div>
        <button>Submit</button>
			</form>
		</div>
	);
}

export default UserFrom;


// <form onSubmit={submitHandler}>
// 				<div>
// 					<label>First name : </label>
// 					<input
// 						value={bind}
// 						onChange={(e) => setFirstName(e.target.value)}
// 						type="text"
// 					/>
// 				</div>
// 				<div>
// 					<label>Last name : </label>
// 					<input
// 						value={lastName}
// 						onChange={(e) => setLastName(e.target.value)}
// 						type="text"
// 					/>
// 				</div>
//         <button>Submit</button>
// 			</form>