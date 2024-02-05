// import { UserButton } from "@clerk/nextjs";

// export default function Home() {
//     return (
//         <div className="h-screen">
//             <UserButton afterSignOutUrl="/" />
//         </div>
//     )
// }

import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <SignUp />
    )
}
