package nhom1.cnm.hallochat.view;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.core.content.FileProvider;

import android.Manifest;
import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import nhom1.cnm.hallochat.BuildConfig;
import nhom1.cnm.hallochat.R;
import nhom1.cnm.hallochat.satic.StaticData;

public class ChatActivity extends AppCompatActivity {

    private ImageView imageProfile;
    private int PERMISSION_CAMERA = 123;
    private int PERMISSION_STORAGE = 124;
    private int REQUEST_TAKE_PHOTO = 125;
    private String TAG = "MyProfile";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_chat);

        findViewById(R.id.btn_back).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        initCameraButtonChat();
    }

    private void initCameraButtonChat() {
        imageProfile = (ImageView) findViewById(R.id.profile);
        findViewById(R.id.btn_test_camera).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                checkPermissionCameraAndStorage();
            }
        });
    }

    private void checkPermissionCameraAndStorage() {
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this,
                    new String[]{Manifest.permission.CAMERA},
                    PERMISSION_CAMERA);
        } else if (ContextCompat.checkSelfPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this,
                    new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE},
                    PERMISSION_STORAGE);
        } else {
            dispathTakePictureIntent();
        }
    }

    private void dispathTakePictureIntent() {
        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (takePictureIntent.resolveActivity(getPackageManager()) != null) {
            File photeFile = null;
            try {
                photeFile = createImageFile();
            } catch (IOException ex) {
                ex.printStackTrace();
            }

            if (photeFile != null) {
                StaticData.uri = FileProvider.getUriForFile(this,
                        BuildConfig.APPLICATION_ID + ".provider",
                        photeFile);
                takePictureIntent.putExtra(MediaStore.EXTRA_OUTPUT, StaticData.uri);
                startActivityForResult(takePictureIntent, REQUEST_TAKE_PHOTO);
            } else {
                Log.d(TAG, "dispatchTakePhotoIntent: photoFile null");
            }
        } else {
            Log.d(TAG, "dispatchTakePhotoIntent: null");
        }
    }

    private File createImageFile() throws IOException {
        @SuppressLint("SimpleDateFormat") String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
        String imageFileName = "JPEG_" + timeStamp + "_";
        File storageDir = getExternalFilesDir(Environment.DIRECTORY_PICTURES);
        File image = File.createTempFile(
                imageFileName,
                ".jpg",
                storageDir
        );
        return image;
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == RESULT_OK && requestCode == REQUEST_TAKE_PHOTO) {
            if (StaticData.uri != null) {
                imageProfile.setImageURI(StaticData.uri);
            }
        }
    }
}