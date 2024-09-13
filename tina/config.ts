import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "img",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog",
        path: "src/content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Date Published",
            required: true,
          },
          {
            type: "boolean",
            label: "Schedule Post to Publish Automatically",
            name: "scheduled",
            ui: {
              component: "checkbox",
            },
            description:
              "When a post is ready, check this box and the post will publish at midnight on the date specified.  The 'Published' field will automatically toggle to 'true'.",
          },
          {
            type: "datetime",
            name: "updatedDate",
            label: "Date Updated",
            required: false,
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
            required: false,
          },
          {
            type: "boolean",
            label: "Published",
            name: "published",
            description:
              "Whether this post should be publicly visible.  If you would like a post to schedule at a future date, leave this toggle off and use the control above to schedule the post to automatically publish.",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
