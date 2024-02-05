"use client"

import { useStoreModal } from "@/hooks/use-store-modal"
import { Modal } from "@/components/ui/model"
export const StoreModal = () => {
    const StoreModal = useStoreModal()
    return (
        <Modal
            title="Create Store"
            description="Create a new store"
            isOpen={StoreModal.isOpen}
            onClose={StoreModal.onClose}
        >
            Future Created Store
        </Modal>
    )
    

}