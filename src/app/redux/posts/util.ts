import { format, addDays } from 'date-fns';
import { Post } from '../_features/posts/posts-slice';

const examplePosts: Post[] = [
    {
        id: '1',
        title: 'Post 1',
        content: 'Content of Post 1',
        createdAt: "10/24/2023, 11:57 AM",
    },
    {
        id: '2',
        title: 'Post 2',
        content: 'Content of Post 2',
        createdAt: "10/14/2023, 3:30 PM",
    },
    {
        id: '3',
        title: 'Post 3',
        content: 'Content of Post 3',
        createdAt: "10/25/2023, 7:25 AM",
    },
    {
        id: '4',
        title: 'Post 4',
        content: 'Content of Post 4',
        createdAt: "10/26/2023, 2:01 AM",
    },
    {
        id: '5',
        title: 'Post 5',
        content: 'Content of Post 5',
        createdAt: "10/30/2023, 8:15 PM",
    },
    {
        id: '6',
        title: 'Post 6',
        content: 'Content of Post 6',
        createdAt: "10/31/2023, 5:46 AM",
    },
    {
        id: '7',
        title: 'Post 7',
        content: 'Content of Post 7',
        createdAt: "10/23/2023, 9:14 PM",
    },
    {
        id: '8',
        title: 'Post 8',
        content: 'Content of Post 8',
        createdAt: "10/24/2023, 9:03 PM",
    },
    {
        id: '9',
        title: 'Post 9',
        content: 'Content of Post 9',
        createdAt: "10/23/2023, 2:16 AM",
    },
    {
        id: '10',
        title: 'Post 10',
        content: 'Content of Post 10',
        createdAt: "10/19/2023, 9:42 AM",
    },
];

export default examplePosts;
