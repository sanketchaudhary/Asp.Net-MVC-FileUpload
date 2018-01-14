using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FileUpload.Models
{
    public class ChangeRequest
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<FileData> FileDetails { get; set; }
    }

    public class FileData
    {
        public string FileType { get; set; }
        public HttpPostedFileBase FileUpload { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsUploaded { get; set; }
    }
}