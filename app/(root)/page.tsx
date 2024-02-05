"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"
import { Modal } from "@/components/ui/model";
const SetupPage=() =>{
    return (
        <div className="p-4">
            <Modal title="test" description="Test Description" isOpen onClose={()=>{}}>

                Children
        
            </Modal >
            
        </div>
    );
}

export default SetupPage;

