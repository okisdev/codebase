import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        language: {
            type: 'string',
            description: 'The language of the post',
            required: false,
        },
        suffix: {
            type: 'string',
            description: 'The suffix of the post',
            required: true,
        },
    },
}));

export default makeSource({
    contentDirPath: 'code',
    documentTypes: [Post],
});
