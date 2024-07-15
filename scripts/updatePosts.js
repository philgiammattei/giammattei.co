import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { isPast, parseISO } from 'date-fns';

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

fs.readdir(postsDirectory, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach((file, index) => {
    const filePath = path.join(postsDirectory, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const result = matter(content);

    if (result.data.published === false && isPast(parseISO(result.data.pubDate))) {
      result.data.published = true;
      const updatedContent = matter.stringify(result.content, result.data);
      fs.writeFileSync(filePath, updatedContent);
      console.log(`Updated ${file}`);
    }
  });
});