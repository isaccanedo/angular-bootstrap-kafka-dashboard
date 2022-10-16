FROM atmoz/sftp

ARG ftpuser
ARG ftppass

RUN mkdir -p /home/$ftpuser/R10/
RUN mkdir -p /home/$ftpuser/UVC/
RUN mkdir -p /home/$ftpuser/UVC_NECTAR_INIT/
RUN mkdir -p /home/$ftpuser/UVC_ONLINE_INIT/
RUN mkdir -p /home/$ftpuser/UVC_SUPPRESSION_INIT/
RUN mkdir -p /home/$ftpuser/UVC_NECTAR_DELTA/
RUN mkdir -p /home/$ftpuser/UVC_ONLINE_DELTA/
RUN mkdir -p /home/$ftpuser/UVC_SUPPRESSION_DELTA/
RUN mkdir -p /home/$ftpuser/NECTAR_BALANCE/
RUN chmod -R 777 /home/$ftpuser
COPY R10/ /home/$ftpuser/R10/
COPY UVC/ /home/$ftpuser/UVC/
#COPY UVC_NECTAR_INIT/ /home/$ftpuser/UVC_NECTAR_INIT/
#COPY UVC_ONLINE_INIT/ /home/$ftpuser/UVC_ONLINE_INIT/
#COPY UVC_SUPPRESSION_INIT/ /home/$ftpuser/UVC_SUPPRESSION_INIT/
#COPY UVC_NECTAR_DELTA/ /home/$ftpuser/UVC_NECTAR_DELTA/
#COPY UVC_ONLINE_DELTA/ /home/$ftpuser/UVC_ONLINE_DELTA/
#COPY UVC_SUPPRESSION_DELTA/ /home/$ftpuser/UVC_SUPPRESSION_DELTA/
COPY NECTAR_BALANCE/ /home/$ftpuser/NECTAR_BALANCE/

RUN echo

ENV userpass "$ftpuser:$ftppass"
RUN echo "$userpass"
ENTRYPOINT /entrypoint "$userpass:::R10:UVC:UVC_NECTAR_INIT:UVC_ONLINE_INIT:UVC_SUPPRESSION_INIT:UVC_NECTAR_DELTA:UVC_ONLINE_DELTA:UVC_SUPPRESSION_DELTA:NECTAR_BALANCE"
