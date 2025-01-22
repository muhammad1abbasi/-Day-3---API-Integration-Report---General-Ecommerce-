export default {
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    {
      name: 'id',
      type: 'number',
      title: 'ID',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    }
  ],
};