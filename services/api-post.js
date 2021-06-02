import axios from 'services/axios';
import { POST_TYPE } from 'utils/constants/post-types';

const parsePosts = (response) => {
  const { Items = [] } = response;

  return Items.map((post) => ({
    id: post.post_id,
    userId: post.created_user_id,
    description: post.description,
    guestFemaleCount: parseInt(post.guest_female_count, 10),
    guestMaleCount: parseInt(post.guest_male_count, 10),
    guestOtherCount: parseInt(post.guest_other_count, 10),
    hostFemaleCount: parseInt(post.host_female_count, 10),
    hostMaleCount: parseInt(post.host_male_count, 10),
    hostOtherCount: parseInt(post.host_other_count, 10),
    venueLocation: post.venue_location,
    startDate: post.start_date,
    startTime: post.start_time,
    postType: post.post_type,
    venueId: post.venue_id,
    venueName: post.venue_name,
    postTags: post.post_tags,
  }));
};

export const fetchCreatePost = async (newPost) => {
  const type = newPost.postType === POST_TYPE.HOST ? 'host' : 'guest'
  return await axios.post(`/posts/${newPost.userId}/${type}`, {
    created_user_id: newPost.userId,
    description: newPost.description,
    guest_female_count: newPost.guestFemaleCount,
    guest_male_count: newPost.guestMaleCount,
    guest_other_count: newPost.guestOtherCount,
    host_female_count: newPost.hostFemaleCount,
    host_male_count: newPost.hostMaleCount,
    host_other_count: newPost.hostOtherCount,
    venue_location: newPost.venueLocation,
    start_date: newPost.startDate,
    start_time: newPost.startTime,
    post_type: newPost.postType,
    venue_id: newPost.venueId,
    venue_name: newPost.venueName,
    post_tags: newPost.postTags,
    fee: newPost.fee
  });
};

export const fetchGetPosts = async ({
  venueLocation,
  startDate,
  endDate,
}) => {
  const response = await axios.get(`/posts`, {
    params: {
      venue_location: venueLocation,
      start_date: startDate,
      end_date: endDate,
    },
  });

  return parsePosts(response);
};
