import React, { useCallback, useState } from 'react';

export default function Cau3() {
    // Tạo state để lưu trữ màu được chọn
    const [selectedColor, setSelectedColor] = useState('#000000');

    // Hàm xử lý sự kiện khi người dùng chọn màu mới
    const handleChangeColor = useCallback((event:any) => {
        setSelectedColor(event.target.value);
    }, []);

    return (
        <div>
           Câu 3
            <p>Màu người dùng chọn</p>
            <input
                type="color"
                value={selectedColor}
                onChange={handleChangeColor}
            />
            <p>Màu hiện thị</p>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: selectedColor,
                    border: '1px solid #000',
                    marginTop: '10px'
                }}
            />
        </div>
    );
}
