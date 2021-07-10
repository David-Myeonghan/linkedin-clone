import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 3;
	color: black;
	background-color: rgba(0, 0, 0, 0.6);
	animation: fadeIn 0.3s; // This comes from index.css
`;

const Content = styled.div`
	width: 100%;
	max-width: 552px;
	background-color: white;
	max-height: 90%;
	overflow: initial;
	border-radius: 5px;
	position: relative;
	display: flex;
	flex-direction: column;
	top: 32px;
	margin: 0 auto;
`;

const Header = styled.div`
	/* box-sizing: border-box; */
	/* width: 100%; */
	padding: 16px 20px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
	font-size: 16px;
	line-height: 1.5;
	color: rgba(0, 0, 0, 0.6);
	font-weight: 400;
	display: flex;
	justify-content: space-between;
	align-items: center;

	button {
		height: 40px;
		width: 40px;
		min-width: auto;
		color: rgba(0, 0, 0, 0.15);
		/* margin: 0 auto; */
		display: flex;
		justify-content: center;
		align-items: center;

		img,
		svg {
			height: 30px;
			width: 30px;
			pointer-events: none;
		}
	}
`;

const SharedContent = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow-y: hidden;
	vertical-align: baseline;
	background: transparent;
	padding: 8px 12px;
`;

const UserInfo = styled.div`
	display: flex;
	align-items: center;
	padding: 12px 24px;
	svg,
	img {
		width: 48px;
		height: 48px;
		background-clip: content-box;
		border: 2px solid transparent;
		border-radius: 50%;
	}

	span {
		font-weight: 600;
		font-size: 16px;
		line-height: 1.5;
		margin-left: 6px;
	}
`;

const ShareCreation = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
	display: flex;
	align-items: center;
	height: 40px;
	min-width: auto;
	color: rgba(0, 0, 0, 0.3);
	padding: 4px;

	img {
		height: 20px;
		margin: 0 auto;
	}
`;

const AttachAssets = styled.div`
	display: flex;
	align-items: center;
	padding-right: 8px;
	${AssetButton} {
		width: 40px;
	}
`;

const ShareComment = styled.div`
	padding-left: 8px;
	margin-right: auto;
	border-left: 1px solid rgba(0, 0, 0, 0.3);
	${AssetButton} {
		img {
			margin-right: 6px;
		}
	}
`;

const PostButton = styled.button`
	min-width: 60px;
	border-radius: 20px;
	padding; 0 16px;
    background: #0a66c2;
    color: white;

    &:hover {
        background: #004182;
    }
`;

const Editor = styled.div`
	padding: 12px 24px;
	textarea {
		width: 100%;
		min-height: 100px;
		resize: none;
	}

	input {
		width: 100%;
		height: 15px;
		font-size: 16px;
		margin-bottom: 20px;
	}
`;

const PostModal = (props) => {
	const [editorText, setEditorText] = useState('');
	const modalRef = useRef(null);

	const reset = (e) => {
		setEditorText('');
		props.handleClick(e);
	};

	useEffect(() => {
		const pageClickEvent = (e) => {
			if (modalRef.current !== null && !modalRef.current.contains(e.target)) {
				reset(e);
			}
			console.log(e.target);
			console.log(e.currentTarget);
		};
		if (props.showModal) {
			window.addEventListener('click', pageClickEvent);
		}

		return () => {
			window.removeEventListener('click', pageClickEvent);
		};
	}, [props.showModal]);

	return (
		<>
			{/* Conditional rendering here makes modal keep rendering in Main component. So, make condition in outer Main Component */}
			{/* {props.showModal === 'open' && ( */}
			<Container>
				<Content ref={modalRef}>
					<Header>
						<h2>Create a post</h2>
						<button onClick={(e) => reset(e)}>
							<img src="/images/svg/close-icon.svg" alt="" />
						</button>
					</Header>
					<SharedContent>
						<UserInfo>
							<img src="/images/svg/user.svg" alt="" />
							<span>Name</span>
						</UserInfo>
						<Editor>
							<textarea
								value={editorText}
								onChange={(e) => setEditorText(e.target.value)}
								placeholder="What do you want to talk about?"
								autoFocus={true}
							></textarea>
						</Editor>
					</SharedContent>
					<ShareCreation>
						<AttachAssets>
							<AssetButton>
								<img src="/images/svg/photo-icon.svg" alt="" />
							</AssetButton>
							<AssetButton>
								<img src="/images/svg/play-icon.svg" alt="" />
							</AssetButton>
						</AttachAssets>
						<ShareComment>
							<AssetButton>
								<img src="/images/svg/comment-icon.svg" alt="" />
								Anyone
							</AssetButton>
						</ShareComment>

						<PostButton>Post</PostButton>
					</ShareCreation>
				</Content>
			</Container>
			{/* )} */}
		</>
	);
};

export default PostModal;
