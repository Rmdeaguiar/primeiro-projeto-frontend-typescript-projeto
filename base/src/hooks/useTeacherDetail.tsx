import Teacher from "../types/Teacher";
import { useState } from 'react'

function useTeacherDetail() {
    const [currentTeacherDetail, setCurrentTeacherDetail] = useState<Teacher>(
        localStorage.getItem('current-teacher')
        ? JSON.parse(localStorage.getItem('current-teacher')!) :
        { id: 0, name: '', avatar: '', bio: '', stack: '' }
    )

    function handleInsertTeacher(teacher: Teacher) {
        localStorage.setItem('current-teacher', JSON.stringify(teacher))
        setCurrentTeacherDetail(teacher)
    }

    return {
        handleInsertTeacher,
        currentTeacherDetail
    }
}


export default useTeacherDetail;