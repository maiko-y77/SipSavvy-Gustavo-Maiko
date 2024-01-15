import { TrashIcon, EyeIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const CollectionItem = () => {
    return (
        <div className="collection-item">
            <div className="collection-details">
                <div className="collection-div">
                    <h3 className="collection-title"><Link href="#">Grape Varieties Guides</Link></h3>
                    <div className="collection-text">12 Articles</div>
                </div>
                <div className="collection-options">
                    <div className="collection-div">
                        <Link href="#" className="icon-link">
                            <PencilSquareIcon width={27} height={24} />
                        </Link>
                        <Link href="#" className="icon-link">
                            <EyeIcon width={27} height={24} />
                        </Link>
                        <Link href="#" className="icon-link">
                            <TrashIcon width={27} height={24} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollectionItem;