import "./messages.scss"
import Tab from "../../../components/Tab/Tab";
import {
    ArrowUturnLeftIcon,
    EnvelopeIcon,
    TrashIcon
} from "@heroicons/react/24/outline";

const BASE_CLASS = "messages";

const messages = () => {
    return (
        <>
            <div className={`${BASE_CLASS}`}>
                <div className={`${BASE_CLASS}__container`}>
                    <div className={`${BASE_CLASS}__sidebar`}>
                        <div className={`${BASE_CLASS}__sidebar__folder`}>
                            <p className="inbox">Inbox (1)</p>
                            <p className="sent-trash">Sent</p>
                            <p className="sent-trash">Trash</p>
                        </div >
                    </div >
                    <div className={`${BASE_CLASS}__main`}>
                        <div className={`${BASE_CLASS}__tabs`}>
                            <div className={`${BASE_CLASS}__tabs__tab`}>
                                <Tab text="Messages" isActive={true} />
                            </div>
                        </div>
                        <div className={`${BASE_CLASS}__list`}>
                            <div className={`${BASE_CLASS}__item`}>
                                <div className={`${BASE_CLASS}__item__content`}>
                                    <p>From: Gustavo Neri</p>
                                    <p>Subject: Hello!</p>
                                    <p>This is the sample of the message</p>
                                </div>
                                <div className={`${BASE_CLASS}__item__action`}>
                                    <ArrowUturnLeftIcon className="item-icons" />
                                    <EnvelopeIcon className="item-icons" />
                                    <TrashIcon className="item-icons" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}

export default messages;
