import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import UserCard from './usercard';
import { IMember } from '../interfaces/Member';
import { IUserCard } from '../interfaces/UserCard';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	background: 'rgba(0, 0, 0, .2)',
	backdropFilter: 'blur(2em)',
	boxShadow: 24,
	p: 4,
    my: 4,
    overflowY: 'auto',
    width: '80%',
    maxHeight: '100%',
    // minWidth: '25em',
	display: 'flex',
	flexDirection: 'column',
	gap: '.5em',
};

interface IProps {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	members: IUserCard[];
}

const MembersModal = ({ open, setOpen, members }: IProps) => {
	const [memberData, setMemberData] = useState([]);
	useEffect(() => {
		// find members info based on id
	}, []);

	return (
		<div>
			<Modal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<Box sx={style}>
					<Typography variant="h6" component="h2" color="white" fontWeight="bold">
						Members
					</Typography>
					<div style={{ display: 'flex', gap: '1em', width: '100%', flexWrap: 'wrap'}}>
						{members.map((card, i) => (
							<UserCard
								key={i}
								name={card.name}
								projectlink={card.projectlink}
								resumelink={card.resumelink}
								featured={card.featured}
								grad={card.grad}
								category={card.category}
								projectName={card.projectName}
								school={card.school}
							></UserCard>
						))}
					</div>
				</Box>
			</Modal>
		</div>
	);
};

export default MembersModal;
