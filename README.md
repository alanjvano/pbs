# pbs
This repo provides a comprehensive personal budgeting system (PBS) in the form of a server and database.

## Configuring Server for Remote Access
As I have had to relearn and reimplement these steps too many times, I have decided to document all the steps necessary to setting up the server from scratch.

1. Install Apache2 on server device. Just check your IP address on your LAN to see if it is working.
    ```sh  
    sudo apt install apache2
    ```

2. Set a static IP address for your server device on your network.

3. Setup port forwarding on your router. First determine your default gateway (like 192.168.1.254 in this case).  Then assuming you want to setup both HTTP and HTTPS forward ports 80 and 443, respectively.

![Alt text](imgs/port_forwarding_img.png "a title")

4. Now assuming you want to be able to access your server remotely you need to a dynamic DNS service that will point your domain to a dynamic IP address. This is necessary as the public IP address of your router changes periodically. The following steps assume that your domain is purchase through Google Domains which has Dynamic DNS for free, although there are plenty of other legit, free alternatives.  

    1. Go to [domains.google.com](domains.google.com). Then go to my domains and select manage for the domain you wish to configure.

    2. Next select DNS from the left menu and select "show advanced settings." Then go to "Manage dynamic DNS" and select "Create new record".

    3. Here you have the option of using a subdomain if desired, otherwise, the first field can just be left blank (I think the root domain is default).

    4. Now you need to either setup a dynamic DNS client to autmatically update the dynamic DNS record, or you can manually update the dynamic DNS record by calling the Google API. Here I have opted to manually use the Google API.
    This can be done manually by making a request to:
        ```
        https://username:password@domains.google.com/nic/update?hostname=subdomain.yourdomain.com&myip=1.2.3.4
        ```

        Your username
    
    5. test


