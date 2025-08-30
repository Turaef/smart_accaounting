Get-ChildItem -Recurse -File | 
    Sort-Object -Property Length -Descending | 
    Select-Object -First 10 -Property @{Name="FullPath";Expression={$_.FullName}},@{Name="SizeInMB";Expression={[math]::Round($_.Length / 1MB, 2)}} | 
    Format-Table -AutoSize 