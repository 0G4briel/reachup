using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;


namespace ReachUp
{
    public class EmailConfiguration
    {
       public string From {get; set;}
       public string SmtpServer {get; set;}
       public int Port {get; set;}
       public string UserName {get; set;}
       public string Password {get; set;}

       public string UserEmail {get; set;}
       public string EmailName {get; set;}
       public string EmailContent {get; set;}

       public EmailConfiguration() {}

       public EmailConfiguration(string userEmail, string emailName, string emailContent)
       {
          this.UserEmail = userEmail;
          this.EmailName = emailName;
          this.EmailContent = emailContent;
       }
       
    }
}