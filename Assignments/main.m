%% User Prompts
messageTriangle = 'Please enter the cartesian coordinates of the vertices of the triangle in the form: ';
formatTriangle = '[X1 Y1 X2 Y2 X3 Y3] \nDO NOT FORGET TO START AND END WITH THE SQUARE BRACKETS!\n>>  ';

messagePoint = 'Please enter the cartesian coordinates of the point to convert it to barycentric in the form: ';
formatPoint = '[X4 Y4] \nDO NOT FORGET TO START AND END WITH THE SQUARE BRACKETS!\n>>  ';

triangleCoor = input(strcat(messageTriangle,formatTriangle));
disp(triangleCoor);

cToBCoor = input(strcat(messagePoint,formatPoint));
disp(cToBCoor);

%% Error Checking
if size(triangleCoor,2) ~= 6
    error("You didn't enter the 6 required parameters for the triangle vertices.  Try Again");
end

if size(cToBCoor,2) ~= 2
    error("You didn't enter the arbitrary point.  Try Again");
end