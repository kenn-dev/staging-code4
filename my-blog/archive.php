<?php
// Load JSON file
$json = file_get_contents('posts.json');
$posts = json_decode($json, true);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Archive</title>
</head>
<body>
    <h1>Blog Archive</h1>
    <?php foreach ($posts as $post): ?>
        <h2><?php echo htmlspecialchars($post['title']); ?></h2>
        <p><?php echo htmlspecialchars($post['date']); ?> by <?php echo htmlspecialchars($post['author']); ?></p>
        <a href="post.php?id=<?php echo $post['id']; ?>">Read More</a>
    <?php endforeach; ?>
</body>
</html>
