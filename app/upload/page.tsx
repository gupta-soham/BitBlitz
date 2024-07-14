import FileUploadClient from "@/components/FileUploadClient";
import IsAuthorized from "@/components/isAuthorized";
import { getAuthSession } from "@/lib/auth";

export default async function FileUploadPage() {
  const session = await getAuthSession();
  const userId = session?.user?.id || null;

  return (
    <IsAuthorized>
      <FileUploadClient userId={userId} />
    </IsAuthorized>
  );
}
