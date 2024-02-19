'use client';

import { getDownloadURL, ref } from 'firebase/storage';
import { Button } from './ui/button';
import { storage } from '@/lib/firebase';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { useState } from 'react';

function DownloadResumeBtn() {
  const [language, setLanguage] = useState('en');

  const downloadResume = async () => {
    const fileRef_en = ref(storage, 'Resume-en.docx');
    const fileRef_fr = ref(storage, 'Resume-fr.docx');

    getDownloadURL(language === 'en' ? fileRef_en : fileRef_fr).then((url) => {
      window.open(url);
    });
  };

  return (
    <div className="flex items-center gap-x-3">
      <div className="bg-gradient-to-r from-red-500 to-purple-500 rounded-lg p-[1.5px]">
        <Button
          onClick={(e) => {
            downloadResume();
          }}
          className="dark:bg-gray-900 hover:bg-white bg-white  dark:text-white text-gray-900 dark:hover:bg-gray-900 dark:hover:text-white hover:text-gray-900 "
        >
          Download Resume
        </Button>
      </div>

      <Select
        value={language}
        onValueChange={(val) => {
          setLanguage(val);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="en">en</SelectItem>
            <SelectItem value="fr">fr</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default DownloadResumeBtn;
