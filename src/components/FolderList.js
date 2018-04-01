import React from 'react';
import styled from 'styled-components';
import {
  FaInbox,
  FaPencil,
  FaListAlt,
  FaBan,
  FaArrowRight,
  FaTrashO,
} from 'react-icons/lib/fa';
import { Folder, FolderSection, FolderLink } from './';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  color: #5084aa;
  border-left: 1px solid #eaeaea;
`;

export default () => (
  <Container>
    <FolderSection name="Favorites" />
    <Folder name="Inbox" icon={<FaInbox size={16} />} />
    <Folder name="Drafts" icon={<FaPencil size={16} />} />
    <Folder name="Archive" icon={<FaListAlt size={16} />} />
    <FolderLink name="Add favorite" />
    <FolderSection name="Folders" />
    <Folder name="Inbox" icon={<FaInbox size={16} />} />
    <Folder name="Junk Email" icon={<FaBan size={16} />} />
    <Folder name="Drafts" icon={<FaPencil size={16} />} />
    <Folder name="Sent Items" icon={<FaArrowRight size={16} />} />
    <Folder name="Deleted" icon={<FaTrashO size={16} />} />
    <Folder name="Archive" icon={<FaListAlt size={16} />} />
    <FolderLink name="New folder" />
  </Container>
);
