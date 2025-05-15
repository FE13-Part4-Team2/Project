import { getGroupInvitation } from '@/lib/apis/group';
import { toast } from 'react-toastify';
import { INVITE_SUCCESS } from '@/constants/successMessage';
import { INVITE_FAILD } from '@/constants/errorMessage';

export const handleInvite = async (groupId: number) => {
  try {
    const inviteUrl = await getGroupInvitation({ groupId });

    if (!inviteUrl) return;

    if (inviteUrl) {
      await navigator.clipboard.writeText(inviteUrl);
      toast.success(INVITE_SUCCESS);
    }
  } catch (error) {
    console.log(INVITE_FAILD, error);
    toast.error(INVITE_FAILD);
  }
};
