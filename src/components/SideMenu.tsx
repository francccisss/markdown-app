import { NavLink } from "react-router-dom";
import UserActions from "./UserActions";
import React, { SetStateAction, useState } from "react";
import setComponentActivity from "@/utils/SetComponentActivity";

interface ISideMenuProps {
	activeModal: boolean;
	setActiveModal: React.Dispatch<SetStateAction<boolean>>;
	sideBarActivity: () => void;
}

const SideMenu = ({
	activeModal,
	setActiveModal,
	sideBarActivity,
}: ISideMenuProps) => {
	const actionsStyle = `side-menu-actions border-l-[3px] border-l-[#00000000] w-10 p-2 h-fit block box-border bg-center transition-all duration-150 ease-in-out
     hover:bg-vn-dshade-white3 `;

	return (
		<div className="  side-menu h-full py-3 relative flex flex-col justify-between items-center text-vn-dshade-white w-10 z-50  bg-vn-black border-r-[3px] border-separator-grey-line ">
			<div id="upper-side-menu-actions" className="flex flex-col gap-2">
				<button onClick={sideBarActivity} className={actionsStyle}>
					<svg
						viewBox="0 0 34 34"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5.61484 8.44H28.2161"
							stroke="#878A8C"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M5.61484 16.9155H28.2161"
							stroke="#878A8C"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M5.61484 25.3909H28.2161"
							stroke="#878A8C"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
				<NavLink
					id="empty-notes-link"
					to={"/app/empty-notes"}
					className={actionsStyle}
				>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4.34363 9.91634H6.57271C8.80179 9.91634 9.91634 8.80179 9.91634 6.57271V4.34363C9.91634 2.11454 8.80179 1 6.57271 1H4.34363C2.11454 1 1 2.11454 1 4.34363V6.57271C1 8.80179 2.11454 9.91634 4.34363 9.91634Z"
							stroke="#878A8C"
							strokeWidth="2"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M17.7181 9.91634H19.9472C22.1763 9.91634 23.2908 8.80179 23.2908 6.57271V4.34363C23.2908 2.11454 22.1763 1 19.9472 1H17.7181C15.489 1 14.3745 2.11454 14.3745 4.34363V6.57271C14.3745 8.80179 15.489 9.91634 17.7181 9.91634Z"
							stroke="#878A8C"
							strokeWidth="2"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M17.7181 23.2908H19.9472C22.1763 23.2908 23.2908 22.1763 23.2908 19.9472V17.7181C23.2908 15.4891 22.1763 14.3745 19.9472 14.3745H17.7181C15.489 14.3745 14.3745 15.4891 14.3745 17.7181V19.9472C14.3745 22.1763 15.489 23.2908 17.7181 23.2908Z"
							stroke="#878A8C"
							strokeWidth="2"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M4.34363 23.2908H6.57271C8.80179 23.2908 9.91634 22.1763 9.91634 19.9472V17.7181C9.91634 15.4891 8.80179 14.3745 6.57271 14.3745H4.34363C2.11454 14.3745 1 15.4891 1 17.7181V19.9472C1 22.1763 2.11454 23.2908 4.34363 23.2908Z"
							stroke="#878A8C"
							strokeWidth="2"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</NavLink>

				<NavLink
					id="vim-cheatsheet"
					to={"/app/vim-cheatsheet"}
					className={actionsStyle}
				>
					<svg
						viewBox="0 0 34 34"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5.64999 4.23751C5.64999 3.45741 6.28239 2.82501 7.06249 2.82501H21.1875L28.25 9.88751V29.6625C28.25 30.4426 27.6176 31.075 26.8375 31.075H7.06249C6.28239 31.075 5.64999 30.4426 5.64999 29.6625V4.23751Z"
							stroke="#878A8C"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<path
							d="M11.3 14.125H22.6"
							stroke="#878A8C"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M11.3 19.775H22.6"
							stroke="#878A8C"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</NavLink>
			</div>
			<button
				onClick={(e) => {
					e.stopPropagation();
					setComponentActivity(activeModal, setActiveModal);
				}}
				id="logout"
				className={actionsStyle}
			>
				<svg
					viewBox="0 0 23 23"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14.6679 22.3359H14.5266C9.69834 22.3359 7.37123 20.4329 6.96888 16.1702C6.92538 15.7243 7.25161 15.322 7.70834 15.2785C8.14331 15.235 8.55654 15.5721 8.60003 16.0179C8.91539 19.4325 10.5248 20.7048 14.5374 20.7048H14.6788C19.1047 20.7048 20.6706 19.1389 20.6706 14.713V7.62292C20.6706 3.19706 19.1047 1.63115 14.6788 1.63115H14.5374C10.503 1.63115 8.89364 2.9252 8.60003 6.40499C8.54566 6.85084 8.16506 7.18795 7.70834 7.14445C7.25161 7.11183 6.92538 6.70947 6.95801 6.26363C7.32774 1.93563 9.66572 0 14.5266 0H14.6679C20.0072 0 22.2908 2.28361 22.2908 7.62292V14.713C22.2908 20.0523 20.0072 22.3359 14.6679 22.3359Z"
						fill="#878A8C"
					/>
					<path
						d="M14.4054 11.9836H2.03045C1.5846 11.9836 1.21487 11.6138 1.21487 11.168C1.21487 10.7221 1.5846 10.3524 2.03045 10.3524H14.4054C14.8513 10.3524 15.221 10.7221 15.221 11.168C15.221 11.6138 14.8513 11.9836 14.4054 11.9836Z"
						fill="#878A8C"
					/>
					<path
						d="M4.45577 15.6266C4.24915 15.6266 4.04254 15.5505 3.87942 15.3873L0.236517 11.7444C-0.078839 11.4291 -0.078839 10.9071 0.236517 10.5917L3.87942 6.94883C4.19478 6.63347 4.71675 6.63347 5.03211 6.94883C5.34746 7.26418 5.34746 7.78615 5.03211 8.10151L1.96554 11.1681L5.03211 14.2347C5.34746 14.55 5.34746 15.072 5.03211 15.3873C4.87986 15.5505 4.66238 15.6266 4.45577 15.6266Z"
						fill="#878A8C"
					/>
				</svg>
			</button>
			{activeModal && <UserActions />}
		</div>
	);
};

export default SideMenu;
