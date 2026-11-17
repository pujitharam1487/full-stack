const fs = require('fs');

// 1. CREATE + WRITE FILE
fs.writeFile('student.txt', 'Hello, I am learning Node.js.', (err) => {
    if (err) {
        console.log('Error creating file:', err);
        return;
    }

    console.log('1. File created and data written successfully.');

    // 2. READ FILE
    fs.readFile('student.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }

        console.log('\n2. File Content:');
        console.log(data);

        // 3. APPEND DATA
        fs.appendFile('student.txt', '\nWelcome to Node.js File Handling!', (err) => {
            if (err) {
                console.log('Error appending data:', err);
                return;
            }

            console.log('\n3. Data appended successfully.');

            // 4. READ UPDATED FILE
            fs.readFile('student.txt', 'utf8', (err, data) => {
                if (err) {
                    console.log('Error reading updated file:', err);
                    return;
                }

                console.log('\nUpdated File Content:');
                console.log(data);

                // 5. CHECK FILE
                fs.access('student.txt', fs.constants.F_OK, (err) => {
                    if (err) {
                        console.log('\n4. File does not exist.');
                        return;
                    }

                    console.log('\n4. File exists.');

                    // 6. FILE INFORMATION
                    fs.stat('student.txt', (err, stats) => {
                        if (err) {
                            console.log('Error getting file information:', err);
                            return;
                        }

                        console.log('\n5. File Information:');
                        console.log('File Size:', stats.size, 'bytes');
                        console.log('Is File:', stats.isFile());
                        console.log('Is Directory:', stats.isDirectory());
                        console.log('Created:', stats.birthtime);
                        console.log('Modified:', stats.mtime);

                        // 7. RENAME FILE
                        fs.rename('student.txt', 'studentdata.txt', (err) => {
                            if (err) {
                                console.log('Error renaming file:', err);
                                return;
                            }

                            console.log('\n6. File renamed successfully.');

                            // 8. DELETE FILE
                            fs.unlink('studentdata.txt', (err) => {
                                if (err) {
                                    console.log('Error deleting file:', err);
                                    return;
                                }

                                console.log('7. File deleted successfully.');
                            });
                        });
                    });
                });
            });
        });
    });
});