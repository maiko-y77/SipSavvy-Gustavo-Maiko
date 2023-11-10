import Image from "next/image";
const logoUrl = "/images/SipSavvy-Logo.svg";
import Dialog from "@/components/Dialog/Dialog";

const Loading = () => {
  return (
    <Dialog>
      <div className="loading-container">
        <Image src={logoUrl} width={163.67} height={64} alt="SipSavvy Logo" />
        <p>
          Uncorking the secrets of the vine for you,
          <br />
          hang tight...
        </p>
        <div className="loading-circles">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Dialog>
  );
};

export default Loading;
