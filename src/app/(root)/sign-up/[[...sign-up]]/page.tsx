import {SignUp} from "@clerk/nextjs";


export default function SignUpPage(){


    return(
        <div className={"auth"}>
            <SignUp/>
        </div>
    )
}
